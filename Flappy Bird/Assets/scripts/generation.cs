using UnityEngine;
using System.Collections;

public class generation : MonoBehaviour {
	
	public GameObject obstacle;
	float x = 1;
	
	void Update () {
		float y = Random.Range(-5.0f, 10f);
		if(x < 1000) {
			Instantiate(obstacle, new Vector3(x * 6.0f, y, 0),Quaternion.identity);
			x++;

		}
		Debug.Log(x);
		StartCoroutine(Example());
	}


	IEnumerator Example() {

		yield return new WaitForSeconds(15);

	}
}

