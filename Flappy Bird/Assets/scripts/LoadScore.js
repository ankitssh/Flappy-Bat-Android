#pragma strict

function Start () {
//PlayerPrefs.DeleteAll();
GetComponent(TextMesh).text=(PlayerPrefs.GetInt("High Score")).ToString();
Score.bool=true;
}

function Update () {

}