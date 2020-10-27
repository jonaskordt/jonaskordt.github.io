import classifaiBlog from "./text/classifai";

interface Blog {
  name: string;
  content: JSX.Element;
}

const blogs: { [id: string]: Blog } = {
  classifai: { name: "Classifai", content: classifaiBlog },
};

export default blogs;
