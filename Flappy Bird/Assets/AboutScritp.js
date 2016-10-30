#pragma strict
var objecto:GameObject;
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
objecto.SetActive(true);

}