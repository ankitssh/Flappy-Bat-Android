#pragma strict
public var speed:float=5.0;
function Start () {
//gameObject.GetComponent(TrailRenderer).sortingOrder=-1;
//gameObject.GetComponent(TrailRenderer).sortingLayerName="character";
}

function LateUpdate () {




transform.Translate(-1*Time.deltaTime*speed,-1*Time.deltaTime*speed,0);
Destroy(gameObject,10);





}