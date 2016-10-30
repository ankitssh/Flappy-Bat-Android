#pragma strict
var target: Transform;
function Start () {

}

function LateUpdate () {
transform.position=new Vector3(target.position.x,transform.position.y,transform.position.z);
}