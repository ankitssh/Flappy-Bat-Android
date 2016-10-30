var y1:float;

function Start()
{}


function Update()
{
y1=Random.Range(-4.0,-2.0);

if(Camera.main.transform.position.x-20.0>gameObject.transform.position.x)
{


gameObject.transform.position= Vector2((Camera.main.transform.position.x)+20,y1);
gameObject.GetComponent(Score).enabled=true;


}

}