* Add Book name and author
* List
* Update Book
* Delete Book
* See Book details
* Login with Customer
* logout
* Use session storage and local storage for two different purposes
* Auth Token


// 10.28.6.4:8080/v2

{
	"name": "s1",
	"author": "Vinicio del Toro"
}

********* New v2
- There is a new version of the API under /v2

- Add JWT authentication to the books app

- A register endpoint was added to register a new user
URI: /v2/user/
Request:
{
    username: “”,
    password: “”,
    customer: “”
}

- A login endpoint was added
URI: /v2/user/login
Request:
{
    username: “”,
    password: “”
}
Response:
{
    token: “”,
    customer: ""
}

- All the existing endpoints are also under /v2 but now requires a header named "auth-token" which is going to contain the token returned by the API on the login request

- A renew endpoint was added
URI: /v2/user/renew
Response:
{
    token: “”,
	customer: ""
}
