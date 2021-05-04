package com.gourab.ipl.controller;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.gourab.ipl.model.Match;
import com.gourab.ipl.model.Team;
import com.gourab.ipl.repository.MatchRepository;
import com.gourab.ipl.repository.TeamRepository;

@RestController
@CrossOrigin
public class TeamController {
	
	@Autowired
	private TeamRepository teamRepo;
	@Autowired
	private MatchRepository matchRepo;

	@GetMapping("/teams/{teamName}")
	private Team getTeamInformation(@PathVariable String teamName) {
		Team team = teamRepo.findByTeamName(teamName);
		List<Match> matches = matchRepo.findLatestMatchesOfTheTeam(teamName, 4);
		team.setMatches(matches);
		return team;
		
	}

	@GetMapping("/teams/{teamName}/matches")
	private List<Match> getAllMatchesForATeamInAGivenYear(@PathVariable String teamName, @RequestParam int year){
		return matchRepo.getAllMatchesForTeamBetweenDateRange(teamName, LocalDate.of(year, 1, 1), LocalDate.of(year+1, 1, 1));
	}

	@GetMapping("/teams")
	private Iterable<Team> getAllTeams(){
		return teamRepo.findAll();
	}
}
