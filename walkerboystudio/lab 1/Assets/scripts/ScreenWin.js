﻿#pragma strict

function OnGUI () {
	GUI.Label(Rect(10, 10, 100, 20), "You WON");
	var newGame: boolean = GUI.Button(Rect(10, Screen.height -120, 100, 50), "New Game");
	var exitGame: boolean = GUI.Button(Rect(10, Screen.height -60, 100, 50), "Exit Game");
	
	if(newGame) { Application.LoadLevel("level"); }
	if(exitGame) { Application.Quit(); }
}