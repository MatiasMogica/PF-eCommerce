import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllComments, getAllUsers } from "../../redux/actions/index";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import Paginated from "../Paginated Reutilizable/Paginated_Reutilizable.jsx";
import stylePaginated from "./Paginated.module.css";
import styles from "./FeedBack.module.css";

export default function FeedBack({ productId, products }) {
  const dispatch = useDispatch();
  // const user = useSelector(state=>state.user_login)
  const allComments = useSelector((state) => state.comments);
  // const [ comments, updateComments ] = useState([allComments])

  const productComments = allComments.filter((e) => productId === e.productId);

  const [paginated, SetPaginated] = useState({
    productsView: [],
    page: 1,
    productsViewPage: [],
  });

  const changePaginatedPage = (newPage) => {
    SetPaginated({
      ...paginated,
      page: newPage,
    });
  };

  const changePaginatedByPage = (productsByPage) => {
    SetPaginated({
      ...paginated,
      productsViewPage: productsByPage,
    });
  };

  // const getData = async () => {
  //   updateComments(allComments);
  // }
  // console.log(getData,"soy getData")

  // useEffect(() => {
  //   localStorage.getItem("comments") !== null
  //     ? updateComments(JSON.parse(localStorage.getItem("comments")))
  //     : getData();
  // }, []);

  const rating = productComments?.map((e) => e.rating);

  const sumaRating = rating?.reduce((e, a) => e + Number(a), 0);

  const totalRating = sumaRating / productComments.length;
  console.log(rating, "rating");

  useEffect(() => {
    dispatch(getAllUsers());
    dispatch(getAllComments());
  }, [dispatch]);

  if (
    JSON.stringify(paginated.productsView) != JSON.stringify(productComments)
  ) {
    console.log(paginated.productsView, "  ", productComments);
    SetPaginated({
      ...paginated,
      productsView: productComments,
    });
  }

  return (
    <div className={styles.containerFeedback}>
      <Paginated
        stylePaginated={stylePaginated}
        NumMaxtarg={10}
        changePaginatedPage={(e) => changePaginatedPage(e)}
        changePaginatedByPage={(e) => changePaginatedByPage(e)}
        paginated={paginated}
      />
      <div className={""}>
        <h1 className={""}>{products}</h1>
        <Box>
          <Rating
            name="text-feedback"
            value={totalRating}
            readOnly
            precision={0.5}
            emptyIcon={
              <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
            }
          />
        </Box>
      </div>

      <div className={""}>
        <h1 className={styles.title}>Customers Review:</h1>
        <br />
        <div className={styles.flexContainer}>
          {paginated.productsViewPage.length ? (
            paginated.productsViewPage.map((e) => {
              return (
                <div className={styles.boxprueba} key={e.id}>
                  <Box>
                    <Rating
                      name="text-feedback"
                      value={e.rating}
                      readOnly
                      precision={1}
                      emptyIcon={
                        <StarIcon
                          style={{ opacity: 0.55 }}
                          fontSize="inherit"
                        />
                      }
                    />
                  </Box>
                  <h5 className={""}>User: {e.name}</h5>
                  <h5 className={""}>Comment: "{e.comment}"</h5>
                </div>
              );
            })
          ) : (
            <div>
              <h1 className={""}>This products does not have any reviews</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
