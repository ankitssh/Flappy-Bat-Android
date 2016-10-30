#pragma strict
var crash:AudioSource;
static var speed :float=4.0;
var force :float =100.0;
var mysp:GameObject;
function Start () {
Time.timeScale=0;

}

function Update () {
transform.Translate(Time.deltaTime*speed,0,0);
if(Input.GetMouseButtonDown(0))
{
Destroy(mysp);
Time.timeScale=1;
GetComponent.<Rigidbody2D>().AddForce(Vector2.up*force);
}

}

function OnCollisionEnter2D()
{
crash.Play();
//speed=0;
force=0.0;
gameObject.GetComponent.<Animator>().enabled=false;

yield WaitForSeconds(1);
Application.LoadLevel(0);

}