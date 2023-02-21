
# FakeStore API


## API Reference

#### Get all items

```http
  'https://fakestoreapi.com/products'
```

#### Get item

```http
  'https://fakestoreapi.com/products/${id}'
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### Login API to access given token

```http
fetch('https://fakestoreapi.com/auth/login',{
            method:'POST',
            body:JSON.stringify({
                username: "mor_2314",
                password: "83r5^_"
            })
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
```


## Installation

Install ensemble-fakestore with npm

```bash
  npm install ensemble-fakestore
  cd ensemble-fakestore
  create-react-app
```
    
## Deployment

To deploy this project run

```bash
  npm start
```


## Features

- Smooth Transitions
- Live previews
- Search Products 
- Filter Products
- Page for Details about Products 


## 🚀 About Me
I'm an entry level frontend developer trying to make my way up by learning and working as I am expected from my future employer to be :)


## 🔗 Links

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/laurentiu-codre-78b57b15a/)



## Lessons Learned

What did you learn while building this project? What challenges did you face and how did you overcome them?

I've learned new ways to complete my projects and new ways of looking at solving code problems. I've overcome them by keep trying when my code failed.

![Logo](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png?20220125121207)


## Related

Here are some related projects

[PunkBeer Application](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png?20220125121207)

[SnapShot Flickr](https://github.com/codrelaur/Snapshot)

## Usage/Examples

```javascript
import Component from 'ensemble-fakestore-app'
import {Routes} from 'react-router-dom'

function App() {
  return <Component />
}
```

