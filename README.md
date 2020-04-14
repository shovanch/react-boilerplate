This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Absolute imports available

the base is **'src'** <br>
That means all the imports can start relative from **'src'**

`import Bookdetails from './../../components/Bookdetails';`

becomes

`import Bookdetails from 'components/Bookdetails';`

Cleaner Code

## Styles

Globally applicable styles like body, base ; variables, and fonts are availble through `index.scss` on styles folder.
With each components having its own styles.
