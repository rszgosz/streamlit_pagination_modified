# Modified streamlit-pagination
---
<b>Orginal Component:</b> [Socvest/streamlit-pagination](https://github.com/Socvest/streamlit-pagination.git)

You need to import the style file which adjusts the size of the iframe - it can be found [here](https://github.com/Socvest/streamlit-pagination/tree/main/streamlit_pagination).


<b>Modifications:</b> 
- Updated component styling to automatically adapt to Streamlit's active theme (light/dark mode)
- Added a stateful `default` parameter to prevent resetting on reruns


<b>Installation:</b>
- Directly from terminal:
```
pip install git+https://github.com/rszgosz/streamlit_pagination_modified.git
```
- Install it manually:
```
git clone https://github.com/rszgosz/streamlit_pagination_modified.git
```
```
cd streamlit_pagination_modified
```
```
pip install -e .
```


<b>Variables:</b>
- `dataLength`: length of data that will be displayed (rows/index)
- `layout`: dictionary variable to determine what the layout of the mui component will look like including the style
- `default`: (optional) initial page number to display when the component first renders (default=1).

