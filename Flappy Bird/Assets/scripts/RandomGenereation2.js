
var y2:float;
function Start()
{}


function Update()
{

y2=Random.Range(8.0,10.0);
if(Camera.main.transform.position.x-20.0>gameObject.transform.position.x )
{




gameObject.transform.position= Vector2((Camera.main.transform.position.x)+20,y2);
gameObject.GetComponent(Score).enabled=true;
}

}