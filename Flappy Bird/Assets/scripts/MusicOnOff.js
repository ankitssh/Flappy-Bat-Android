#pragma strict
public var mysprite= new Sprite[2];
public static var isBool=false;

function Awake()
{
if(isBool==false)
{
 DontDestroyOnLoad (transform.gameObject);
 isBool=true;
}
else{


Destroy(this.gameObject);
}


}
function Start () {

}

function Update () {

if(Application.loadedLevel==1)
{
gameObject.GetComponent(BoxCollider2D).enabled=false;
gameObject.transform.position=new Vector2(1.42,6.83);
gameObject.GetComponent(SpriteRenderer).enabled=false;


}
if(Application.loadedLevel==0)
{
gameObject.transform.position=new Vector2(-5.06,-4.38);
gameObject.GetComponent(BoxCollider2D).enabled=true;
gameObject.GetComponent(SpriteRenderer).enabled=true;
}



}
function OnMouseDown()
{

if(gameObject.GetComponent(AudioSource).isPlaying)
{
gameObject.GetComponent(AudioSource).Pause();
gameObject.GetComponent(SpriteRenderer).sprite=mysprite[1];

}
else{

gameObject.GetComponent(AudioSource).Play();
gameObject.GetComponent(SpriteRenderer).sprite=mysprite[0];

}



}