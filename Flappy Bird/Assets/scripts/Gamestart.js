#pragma strict

function Start () {
GetComponent.<Renderer>().material.color=Color.white;
}

function Update () {

}
function OnMouseEnter() 
{
GetComponent.<Renderer>().material.color=Color.green;

}
function OnMouseExit() 
{
GetComponent.<Renderer>().material.color=Color.white;

}
function OnMouseDown()
{
if(FlyScript.speed==0.0)
{
FlyScript.speed=4.0;

}
Application.LoadLevel(1);

}