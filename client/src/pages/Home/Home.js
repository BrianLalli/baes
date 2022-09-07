import React, { useState } from "react";
import Style from "./home.module.scss";
import me from "../../img/self.png";
import partner1 from "../../img/Partner1.png"
import { Box } from "@mui/material";
import {Link, useLocation} from "react-router-dom";



let colors = ["rgb(0, 128, 128)", "rgb(224, 81, 171)"];

const info = {
    firstName: "Brian",
    lastName: "Lalli",
    selfPortrait: "self", // don't change this unless you want to name your self-portrait in the "img" folder something else!
    partner1: "partner1",
    // partner2: "partner2",
    // partner3: "partner3",
    // partner3: "partner3",
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
  };

  
  export default function Home() {
    const [formState, setFormState] = useState({
      imageLink: '',
    });
  
    // const [addHeadshot, { error, data }] = useMutation(ADD_USER);
  
    // update state based on form input changes
    const handleChange = (event) => {
      const { name, value } = event.target;
  
      setFormState({
        ...formState,
        [name]: value,
      });
    };
  
    // submit form
    const handleFormSubmit = async (event) => {
      event.preventDefault();
      console.log(formState);
  
    //   try {
    //     const { data } = await addHeadshot({
    //       variables: { ...formState },
    //     });
  
    //     Auth.login(data.addUser.token);
    //   } catch (e) {
    //     console.error(e);
    //   }
    };
  
    return (
      <div className="signup-container">
  
        <div>
          <h4>Add Profile Image</h4>
        </div>
  
        <div className="signup-form-container">
          <img className="card col-12 col-md-4" src={formState.imageLink}/>
            <form onSubmit={handleFormSubmit}>
              <input
                className="form-input"
                placeholder="imageLink"
                name="imageLink"
                type="text"
                value={formState.imageLink}
                onChange={handleChange}
              />
              <div className="submit-signup">
                <button
                  className="submit-signup-button"
                  type="submit"
                >
                  submit
                </button>
              </div>
            </form>
        </div>
    </div>
    );
    // return (
    //   <Box
    //     component={"main"}
    //     display={"flex"}
    //     flexDirection={{ xs: "column", md: "row" }}
    //     alignItems={"center"}
    //     justifyContent={"center"}
    //     minHeight={"calc(100vh - 175px)"}
    //   >
    //     <Box
    //       alt={"image of user"}
    //       style={{ background: info.gradient }}
    //       component={"img"}
    //       src={"https://i.imgur.com/T7wqkjT.png"}
    //       width={{ xs: "35vh", md: "40vh" }}
    //       height={{ xs: "35vh", md: "40vh" }}
    //       borderRadius={"50%"}
    //       p={"0.75rem"}
    //       mb={{ xs: "1rem", sm: 0 }}
    //       mr={{ xs: 0, md: "2rem" }}
    //     />
    //     <Box
    //       display={"flex"}
    //       gap={"1.5rem"}
    //       justifyContent={"center"}
    //       alt={"image of partner"}
    //       style={{ background: info.gradient }}
    //       component={"img"}
    //       src={partner1}
    //       width={{ xs: "35vh", md: "40vh" }}
    //       height={{ xs: "35vh", md: "40vh" }}
    //       borderRadius={"50%"}
    //       p={"0.75rem"}
    //       mb={{ xs: "1rem", sm: 0 }}
    //       mr={{ xs: 0, md: "2rem" }}
    //     >
    //     </Box>
    //   </Box>
    //   );
    }
