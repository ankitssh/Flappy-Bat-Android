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
gameObject.GetComponent(AudioSource).Play();
FlyScript.speed=4.0;

}