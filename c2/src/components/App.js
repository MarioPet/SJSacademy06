import React from "react";
import { Welcomer } from "./Welcomer";
import { HasVacancy } from "./HasVacancy";
import { Movies } from "./Movies";
import { Comment } from "./Comment";

export class App extends React.Component {
  render() {

    var movies_list = ["Pulp Fiction", "The Wild Bunch", "Straw Dogs", "Mad Max", "Parasite", "The Host", "Barton Fink"];

    var user = {
      firstName: "Mario",
      lastName: "Petkovski",
      email: "mario5etkovski@gmail.com",
      imageUrl: "https://www.biography.com/.image/t_share/MTM3NTcyMjQyNDEzMzMxODg2/gal-gadot_shutterstock_138321062_1000x1000jpg.jpg"
    }

    var comment_data = {
      content: "This is a comment sample",
      date: "11/22/2019",
      user: user
    }

    return (
      <div>
        <Welcomer name="Mario" age={26} />
        <Welcomer name="John Doe" /> <br /> <hr />
        <HasVacancy rooms={false} />
        <Movies movies={movies_list} /> <br /> <hr />
        <Comment data={comment_data} />
      </div>
    )
  }
}