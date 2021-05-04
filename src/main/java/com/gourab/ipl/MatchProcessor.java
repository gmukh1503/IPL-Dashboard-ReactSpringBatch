package com.gourab.ipl;

import java.time.LocalDate;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.batch.item.ItemProcessor;

import com.gourab.ipl.data.MatchInput;
import com.gourab.ipl.model.Match;

public class MatchProcessor implements ItemProcessor<MatchInput, Match> {

	//private static final Logger log = LoggerFactory.getLogger(MatchProcessor.class);
	
	@Override
	public Match process(MatchInput matchInput) throws Exception {
		Match match = new Match();
		match.setId(Long.parseLong(matchInput.getId()));
		match.setCity(matchInput.getCity());
		match.setDate(LocalDate.parse(matchInput.getDate()));
		match.setPlayerOfMatch(matchInput.getPlayer_of_match());
		match.setVenue(matchInput.getVenue());
		match.setUmpire1(matchInput.getUmpire1());
		match.setUmpire2(matchInput.getUmpire2());
		match.setResult(matchInput.getResult());
		match.setResultMargin(matchInput.getResult_margin());
		match.setTossDecision(matchInput.getToss_decision());
		match.setTossWinner(matchInput.getToss_winner());
		match.setWinner(matchInput.getWinner());
		
		String firstInningsTeam, secondInningsTeam;
		if("bat".equals(matchInput.getToss_decision().trim()))
		{
			firstInningsTeam = matchInput.getToss_winner().trim();
			if(firstInningsTeam.equals(matchInput.getTeam1().trim()))
			{
				secondInningsTeam = matchInput.getTeam2().trim();
			}
			else
			{
				secondInningsTeam = matchInput.getTeam1().trim();
			}
		}
		else
		{
			secondInningsTeam = matchInput.getToss_winner().trim();
			if(secondInningsTeam.equals(matchInput.getTeam1().trim()))
			{
				firstInningsTeam = matchInput.getTeam2().trim();
			}
			else
			{
				firstInningsTeam = matchInput.getTeam1().trim();
			}
		}
		
		match.setTeam1(firstInningsTeam);
		match.setTeam2(secondInningsTeam);
		
		return match;
	}

}
