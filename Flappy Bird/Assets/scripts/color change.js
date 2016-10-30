#pragma strict
var scoretext:TextMesh;
var mycolor=new Color[6];
var mybool=true;
function Start () {
mycolor[0]=Color.red;
mycolor[1]=Color.blue;
mycolor[2]=Color.cyan;
mycolor[3]=Color.green;
mycolor[4]=Color.magenta;
mycolor[5]=Color.yellow;

}

function Update () {
if(parseInt(scoretext.text)%100==0 &&parseInt(scoretext.text)!=0 && mybool==true)
{


gameObject.GetComponent(SpriteRenderer).color=mycolor[parseInt(Random.Range(0,5))];

}

}
