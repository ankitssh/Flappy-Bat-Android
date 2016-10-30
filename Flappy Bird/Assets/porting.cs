// MouseEventsGenerator.cs
using UnityEngine;

public class MouseEventsGenerator : MonoBehaviour
{
	#if !UNITY_EDITOR
	Collider current = null;
	Collider drag = null;
	
	void Update()
	{
		Ray ray = Camera.main.ScreenPointToRay(Input.mousePosition);
		RaycastHit hit;
		if(Physics.Raycast(ray, out hit))
		{
			if(current == null)
			{
				current = hit.collider;
				current.SendMessage("OnMouseEnter");
			}
			else
			{
				current.SendMessage("OnMouseOver");
				if(Input.GetMouseButtonDown(0))
				{
					current.SendMessage("OnMouseDown");
					drag = current;
				}
				if(Input.GetMouseButtonUp(0))
				{
					current.SendMessage("OnMouseUp");
					if(current == drag)
					{
						current.SendMessage("OnMouseUpAsButton");
						drag = null;
					}
				}
			}
		}
		else
		{
			if(current != null)
			{
				current.SendMessage("OnMouseExit");
				current = null;
			}
		}
		if(drag != null)
		{
			drag.SendMessage("OnMouseDrag");
		}
	}
	#endif
}
