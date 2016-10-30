#pragma strict

function Start () {
GetComponent.<Renderer>().material.color=Color.white;
}

function Update () {

}
function OnMouseEnter() 
{
GetComponent.<Renderer>().material.color=Color.red;

}
function OnMouseExit() 
{
GetComponent.<Renderer>().material.color=Color.white;

}
function OnMouseDown()
{
gameObject.transform.parent.gameObject.SetActive(false);

}