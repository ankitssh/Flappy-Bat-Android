#pragma strict
static var bool =true;
var temp;
var obj :Rigidbody2D;
var score:TextMesh;
static var HighScore :int=0;
function Start () {
HighScore=PlayerPrefs.GetInt("High Score");
//Debug.Log("High score initial "+HighScore);

}

function Update () {
if(obj.transform.position.x>=gameObject.transform.position.x)
{
Debug.Log("once");
score.text=(parseInt(score.text)+1).ToString();
gameObject.GetComponent(Score).enabled=false;


}

if(parseInt(score.text)>HighScore)
{

if(parseInt(score.text)>HighScore && bool==true)
{
/*gameObject.AddComponent(AudioSource);
gameObject.GetComponent(AudioSource).clip=Resources.Load("Music/Oh Yeah!") as AudioClip;*/
gameObject.GetComponent(AudioSource).Play();
//GameObject.FindGameObjectsWithTag("collider simple").GetComponent(AudioSource).enabled=false;
Debug.Log("Bool is true yeah yrah");
bool=false;
}
HighScore=parseInt(score.text);
PlayerPrefs.SetInt("High Score",HighScore);
//Debug.Log(HighScore);


}

}