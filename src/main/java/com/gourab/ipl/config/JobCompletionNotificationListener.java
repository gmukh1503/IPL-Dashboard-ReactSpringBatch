package com.gourab.ipl.config;

import java.util.HashMap;
import java.util.Map;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.batch.core.BatchStatus;
import org.springframework.batch.core.JobExecution;
import org.springframework.batch.core.listener.JobExecutionListenerSupport;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.gourab.ipl.model.Team;

@Component
public class JobCompletionNotificationListener extends JobExecutionListenerSupport {

	private static final Logger log = LoggerFactory.getLogger(JobCompletionNotificationListener.class);

	// private final JdbcTemplate jdbcTemplate;
	private EntityManager em;
	private String uniqueTeam1Query = "select distinct m.team1, count(*) from Match m group by m.team1";
	private String uniqueTeam2Query = "select distinct m.team2, count(*) from Match m group by m.team2";
	private String teamWinQuery = "select distinct m.winner, count(*) from Match m group by m.winner";
	@Autowired
	public JobCompletionNotificationListener(EntityManager em) {
		this.em = em;
	}

	@Override
	@Transactional
	public void afterJob(JobExecution jobExecution) {
		if (jobExecution.getStatus() == BatchStatus.COMPLETED) {
			log.info("!!! JOB FINISHED! Time to verify the results");

			Map<String, Team> teamMap = new HashMap<>();

			em.createQuery(uniqueTeam1Query, Object[].class).getResultStream()
					.map(result -> new Team((String) result[0], (long) result[1]))
					.forEach(team -> teamMap.put(team.getTeamName(), team));

			em.createQuery(uniqueTeam2Query, Object[].class).getResultStream().forEach(result -> {
				Team t = teamMap.get(result[0]);
				if (null != t) {
					t.setTotalMatches(t.getTotalMatches() + (long) result[1]);
				} else {
					t = new Team((String) result[0], (long) result[1]);
					teamMap.put(t.getTeamName(), t);
				}

			});
			em.createQuery(teamWinQuery, Object[].class).getResultStream().forEach(e -> {
				Team t = teamMap.get(e[0]);
				if(null!=t) {
					t.setTotalWins((long) e[1]);
				}
			});
			
			teamMap.values().forEach(team->em.persist(team));
			teamMap.values().forEach(team->System.out.println(team));
		}
	}
}
