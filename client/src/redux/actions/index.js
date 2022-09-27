import axios from "axios";
import CARRY_LOCALHOST from "../../components/Globales";
import Swal from "sweetalert2";

export const SEARCH_NAME = "SEARCH_NAME";
export const CHANGE_FILTER_GENDER = "CHANGE_FILTER_GENDER";
export const CHANGE_FILTER_CATEGORY = "CHANGE_FILTER_CATEGORY";
export const CHANGE_FILTER_BRAND = "CHANGE_FILTER_BRAND";
export const GET_CATEGORYS = "GET_CATEGORYS";
export const CHANGE_FILTER_MIN = "CHANGE_FILTER_MIN";
export const CHANGE_FILTER_MAX = "CHANGE_FILTER_MAX";
export const CHANGE_FILTER_PRICE = "CHANGE_FILTER_PRICE";
export const CHANGE_PAGINATED_PRODUCTS = "CHANGE_PAGINATED_PRODUCTS";
export const CHANGE_PAGINATED_PAGE = "CHANGE_PAGINATED_PAGE";
export const SEARCH_PRODUCT_ID = "SEARCH_PRODUCT_ID";
export const DELETE_DETAILS = "DELETE_DETAILS";
export const CHANGE_FILTER_NAME = "CHANGE_FILTER_NAME";
export const ADD_PRODUCT_CARRY = "ADD_PRODUCT_CARRY";
export const GET_STOCK_PRODUCT_BY_ID = "GET_STOCK_PRODUCT_BY_ID";
export const DELETE_STOCK_ID = "DELETE_STOCK_ID";
export const GET_STOCK_PRODUCT_BY_ID_TOTAL = "GET_STOCK_PRODUCT_BY_ID_TOTAL";
export const CHANGE_USER_LOGIN = "CHANGE_USER_LOGIN";
export const CREATE_COMMENT = "CREATE_COMMENT";
export const GET_COMMENTS = "GET_COMMENTS";
export const GET_ALL_USERS = "GET_ALL_USERS";
export const CHANGE_PRODUCTS_CARRY = "CHANGE_PRODUCTS_CARRY";
export const GET_ORDERS = "GET_ORDERS";
export const CHANGE_PRODUCTS_BY_PAGE = "CHANGE_PRODUCTS_BY_PAGE";
export const CHANGE_FILTER_URL = "CHANGE_FILTER_URL";
export const DELETE_USERS = "DELETE_USERS";
export const CREATE_ORDER = "CREATE_ORDER";
export const GET_ALL_FAVS = "GET_ALL_FAVS";
export const DELETE_FAVS = "DELETE_FAVS";
export const PUT_USERS = "PUT_USERS";
export const GET_SEARCH_USER = "GET_SEARCH_USER";
export const CALENDAR_DAYS = "CALENDAR_DAYS";
export const CHANGE_DELIVERY = "CHANGE_REFERENCE";
export const CHANGE_DELIVERY_INITIAL = "CHANGE_REFERENCE_INITIAL";
export const SEARCH_ID = "SEARCH_ID";
export const PUT_STOCKS = "PUT_STOCKS";



export function searchNameProduct(name) {
   return async function (dispatch) {
      try {
         var json = await axios.get(
            `http://localhost:3001/product/?name=${name}`
         );
         return dispatch({
            type: SEARCH_NAME,
            payload: json.data,
         });
      } catch (error) {
         console.log(error);
      }
   };
}

export function searchNameProductID(id) {
   return async function (dispatch) {
      try {
         var json = await axios.get(
            `http://localhost:3001/product/?id=${id}`
         );
         return dispatch({
            type: SEARCH_ID,
            payload: json.data,
         });
      } catch (error) {
         console.log(error);
      }
   };
}

export function changeFilternameProductSearched(name) {
   return async function (dispatch) {
      try {
         return dispatch({
            type: CHANGE_FILTER_NAME,
            payload: name,
         });
      } catch (error) {
         console.log(error);
      }
   };
}

export function searchProductId(id) {
   return async function (dispatch) {
      try {
         var json = await axios.get(`http://localhost:3001/product/${id}`);
         return dispatch({
            type: SEARCH_PRODUCT_ID,
            payload: json.data,
         });
      } catch (error) {
         console.log(error);
      }
   };
}

export function deleteDetails() {
   return {
      type: DELETE_DETAILS,
      payload: [],
   };
}

export function deleteStockbyID() {
   return {
      type: DELETE_STOCK_ID,
      payload: [],
   };
}

export function getCategorys() {
   return async function (dispatch) {
      try {
         var json = await axios.get(`http://localhost:3001/category`);
         return dispatch({
            type: GET_CATEGORYS,
            payload: json.data,
         });
      } catch (error) {
         console.log(error);
      }
   };
}

export function changeFilterURL(url) {
   return async function (dispatch) {
      try {
         return dispatch({
            type: CHANGE_FILTER_URL,
            payload: url,
         });
      } catch (error) {
         console.log(error);
      }
   };
}

export function changeFilterGender(gender) {
   return async function (dispatch) {
      try {
         return dispatch({
            type: CHANGE_FILTER_GENDER,
            payload: gender,
         });
      } catch (error) {
         console.log(error);
      }
   };
}

export function changeFilterCategory(value) {
   return async function (dispatch) {
      try {
         console.log(value);;
         return dispatch({
            type: CHANGE_FILTER_CATEGORY,
            payload: value,
         });
      } catch (error) {
         console.log(error);
      }
   };
}

export function changeFilterBrand(event) {
   return async function (dispatch) {
      try {
         return dispatch({
            type: CHANGE_FILTER_BRAND,
            payload: { filter: event.value, checked: event.checked },
         });
      } catch (error) {
         console.log(error);
      }
   };
}

export function changeFilterMax(e) {
   return async function (dispatch) {
      try {
         let value = e.target.valueAsNumber;
         return dispatch({
            type: CHANGE_FILTER_MAX,
            payload: value,
         });
      } catch (error) {
         console.log(error);
      }
   };
}

export function changeFilterMin(e) {
   return async function (dispatch) {
      let value = e.target.valueAsNumber;
      try {
         return dispatch({
            type: CHANGE_FILTER_MIN,
            payload: value,
         });
      } catch (error) {
         console.log(error);
      }
   };
}

export function changeFilterPrice(checked) {
   return async function (dispatch) {
      try {
         return dispatch({
            type: CHANGE_FILTER_PRICE,
            payload: checked,
         });
      } catch (error) {
         console.log(error);
      }
   };
}

export function changePaginatedProducts(nuevosProductos) {
   return async function (dispatch) {
      try {
         return dispatch({
            type: CHANGE_PAGINATED_PRODUCTS,
            payload: nuevosProductos,
         });
      } catch (error) {
         console.log(error);
      }
   };
}

export function changePaginatedPage(newPage) {
   return async function (dispatch) {
      try {
         return dispatch({
            type: CHANGE_PAGINATED_PAGE,
            payload: newPage,
         });
      } catch (error) {
         console.log(error);
      }
   };
}

export function changePaginatedByPage(productsByPage) {
   return async function (dispatch) {
      try {
         return dispatch({
            type: CHANGE_PRODUCTS_BY_PAGE,
            payload: productsByPage,
         });
      } catch (error) {
         console.log(error);
      }
   };
}

export function ChangeCarryProducts(CarryNew) {
   return async function (dispatch) {
      try {
         return dispatch({
            type: CHANGE_PRODUCTS_CARRY,
            payload: CarryNew,
         });
      } catch (error) {
         console.log(error);
      }
   };
}

export function getStockbyID(id) {
   return async function (dispatch) {
      try {
         var json = await axios.get(`http://localhost:3001/stock/${id}`);
         return dispatch({
            type: GET_STOCK_PRODUCT_BY_ID,
            payload: json.data,
         });
      } catch (error) {
         console.log(error);
      }
   };
}

export function getStockbyIDTotalFilterCarry(carry) {
   console.log("Entra", carry);
   return async function (dispatch) {
      try {
         let Stocks = [];
         for (let index = 0; index < carry.length; index++) {
            const element = carry[index];
            let json = await axios.get(
               `http://localhost:3001/stock/${element.id}`
            );
            let array = json.data;
            let elementoIndice = -1;
            console.log(array);
            for (let index = 0; index < array.length; index++) {
               const element2 = array[index];
               console.log(element2.productSize, "  ", element.state.size);
               if (element2.productSize === element.state.size) {
                  elementoIndice = array[index];
                  break;
               }
            }
            if (elementoIndice !== -1) Stocks.push(elementoIndice);
         }
         return dispatch({
            type: GET_STOCK_PRODUCT_BY_ID_TOTAL,
            payload: Stocks,
         });
      } catch (error) {
         console.log(error);
      }
   };
}

export function DeleteDrop(payload) {
   return async function () {
      const response = await axios.put("http://localhost:3001/stock/drop", {
         stockProducts: payload,
      });
      return response;
   };
}

/* CREAR PRODUCTO */

export function CreateNewProduct(payload) {
   return async function () {
      const response = await axios.post(
         "http://localhost:3001/product/",
         payload
      );
      return response;
   };
}

export function getChecklogin(newLoggedUser) {
   return async function (dispatch) {
      try {
         var json = await axios.get(
            `http://localhost:3001/users/login/?email=${newLoggedUser.email}&password=${newLoggedUser.password}`
         );

         var Dato = json.data;
         if (Dato === false) {
            Dato = { id: false };
            failedLogin();
         }

         return dispatch({
            type: CHANGE_USER_LOGIN,
            payload: Dato,
         });
      } catch (error) {
         console.log(error);
      }
   };
}

export function Logout() {
   return async function (dispatch) {
      try {
         return dispatch({
            type: CHANGE_USER_LOGIN,
            payload: { id: false },
         });
      } catch (error) {
         console.log(error);
      }
   };
}

// login google

export function LoginGoogleUser(user) {
   return async function (dispatch) {
      try {
         return dispatch({
            type: CHANGE_USER_LOGIN,
            payload: user,
         });
      } catch (error) {
         console.log(error);
      }
   };
}

function failedLogin() {
   Swal.fire({
      position: "center",
      icon: "error",
      title: "The email or password is not correct",
      showConfirmButton: false,
      timer: 1000,
   });
}

// Comments
export function createComment(payload) {
   console.log("este es el payload papi", payload);
   return function (dispatch) {
      axios
         .post("http://localhost:3001/comment", payload)
         .then((res) => {
            dispatch({
               type: CREATE_COMMENT,
               payload: res.data,
            });
         })
         .catch((error) => console.log(error));
   };
}

export function updateReview(payload) {
   //console.log("esto es el payload de revie",payload)

   return function (dispatch) {
      axios
         .put(`http://localhost:3001/comment`, payload)
         .then((res) => {
            console.log("todo tranqui");
            dispatch({
               type: "UPDATE_REVIEW",
               payload: res.data,
            });
         })
         .catch((error) => console.log(error));
   };
}

export function getAllComments() {
   return function (dispatch) {
      console.log("gjogfjog");
      axios
         .get("http://localhost:3001/comment")
         .then((res) => {
            dispatch({
               type: GET_COMMENTS,
               payload: res.data,
            });
         })
         .catch((error) => console.log(error));
   };
}

export function getOrders(type, parameter) {
   return function (dispatch) {
      axios
         .get(
            `http://localhost:3001/orders?type=${type}&parameter=${parameter}`
         )
         .then((res) => {
            console.log("ENTRAAAAAAAAAAAAAAAAAAAAA")
            dispatch({
               type: GET_ORDERS,
               payload: res.data,
            });
         });
   };
}

export function createOrder(payload) {
   console.log(payload);
   return function (dispatch) {
      axios
         .post("http://localhost:3001/orders", payload)
         .then((res) => {
            dispatch({
               type: CREATE_ORDER,
               payload: res,
            });
         })
         .catch((error) => console.log(error));
   };
}

//USERS ADMIN

export function getAllUsers() {
   return function (dispatch) {
      axios
         .get("http://localhost:3001/users")
         .then((res) => {
            dispatch({
               type: GET_ALL_USERS,
               payload: res.data,
            });
         })
         .catch((error) => console.log(error));
   };
}
export function putUser(input, id) {
  return async function (dispatch) {
    try {
      console.log(input, id);

      const res = await axios.put(
        `http://localhost:3001/users/put/${id}`,
        input
      );
      return dispatch({
        type: PUT_USERS,
        payload: res.data,
      });
    } catch (error) {
      alert("Already exist or some trouble during creation! Come back later");
    }
  };
}

// export function getUserId(id) {
//   console.log(id)
//   return function (dispatch) {
//     axios
//       .get(`http://localhost:3001/users/${id}`)
//       .then((res) => {
//         dispatch({
//           type: CHANGE_USER_LOGIN,
//           payload: res.data,
//         });
//       })
//       .catch((error) => console.log(error));
//   };
// }

export function getSearchUser(name) {
   return async function (dispatch) {
      try {
         var json = await axios.get(
            `http://localhost:3001/users/?name=${name}`
         );
         return dispatch({
            type: GET_SEARCH_USER,
            payload: json.data,
         });
      } catch (error) {
         console.log(error);
      }
   };
}
export function deleteUsers() {
  return {
    type: DELETE_USERS,
    payload: [],
  };
}

//FAVS

export function getAllFavs(payload) {
   return function (dispatch) {
      axios
         .get(`http://localhost:3001/favorites/${payload}`)
         .then((res) => {
            dispatch({
               type: GET_ALL_FAVS,
               payload: res.data,
            });
         })
         .catch((error) => console.log(error));
   };
}

export function deleteFavs() {
   return {
      type: DELETE_FAVS,
      payload: [],
   };
}

export function getCalendar(stock) {
  return async function (dispatch) {
     try {
        var json = await axios.get(
           `http://localhost:3001/calendar/${stock}`
        );
        return dispatch({
           type: CALENDAR_DAYS,
           payload: json.data,
        });
     } catch (error) {
        console.log(error);
     }
  };
}


export function ChangeDelivery(ObjectDelivey) {
  return async function (dispatch) {
     try {
        return dispatch({
           type: CHANGE_DELIVERY,
           payload: ObjectDelivey,
        });
     } catch (error) {
        console.log(error);
     }
  };
}

export function ChangeDeliveryInitial() {
  return async function (dispatch) {
     try {
        return dispatch({
           type: CHANGE_DELIVERY_INITIAL
        });
     } catch (error) {
        console.log(error);
     }
  };
}