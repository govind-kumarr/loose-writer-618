import React from "react";
import { Navbar_dropdown } from "../Navbar/Components/Navbar_dropdown";
import { Navbar_search } from "../Navbar/Components/Navbar_search";
import styles from "./Ayurveda.module.css";

const Ayurveda = () => {
  return (
    <>
      <Navbar_search />
      <Navbar_dropdown />
      <div>
        <div className={styles.flex}>
          <a href="https://www.1mg.com/hi/patanjali?utm_source=ayurvedahome&utm_medium=bannner">
            <img
              src="https://onemg.gumlet.io/image/upload/v1625061044/marketing/bjlo9q3qyxkh7bkhypiz.png"
              alt="ad"
              style={{ width: "100%" }}
            />
          </a>
        </div>
        <p className={styles.featuredhbs}>Featured Herbs</p>
        <div className={styles.istcontainer}>
          <div>
            <img
              src="https://onemg.gumlet.io/image/upload/sdzsl07upy0u3sxckqyj.jpg"
              alt="Ashwagandha"
              className={styles.Ashwagandha}
            />
            <p style={{ fontSize: "14px", fontWeight: "bold" }}>Ashwagandha</p>
            <p
              style={{
                wordWrap: "breakWord",
                width: "292px",
                fontSize: "15px",
              }}
            >
              Ashwagandha is an important herb of the Ayurvedic system of
              medicine. It is also know...
            </p>
          </div>
          <div>
            <img
              src="https://onemg.gumlet.io/image/upload/qh2zgvxci0mazembq9rs.jpg"
              alt="Shilajit"
              className={styles.Ashwagandha}
            />
            <p style={{ fontSize: "14px", fontWeight: "bold" }}>Shilajit</p>
            <p
              style={{
                wordWrap: "breakWord",
                width: "292px",
                fontSize: "15px",
              }}
            >
              Shilajit is a mineral based extract which is pale-brown to
              blackish-brown in color. I...
            </p>
          </div>
          <div>
            <img
              src="https://onemg.gumlet.io/image/upload/un9aranb98jy80ihbj95.jpg"
              alt="Giloy"
              className={styles.Ashwagandha}
            />
            <p style={{ fontSize: "14px", fontWeight: "bold" }}>Giloy</p>
            <p
              style={{
                wordWrap: "breakWord",
                width: "292px",
                fontSize: "15px",
              }}
            >
              Giloy, also known as Amrita or Guduchi in Hindi, is an herb that
              helps improve digest...
            </p>
          </div>
          <div>
            <img
              src="https://onemg.gumlet.io/image/upload/irazjokdgsiiuw6abiph.jpg"
              alt="Amla"
              className={styles.Ashwagandha}
            />
            <p style={{ fontSize: "14px", fontWeight: "bold" }}>Amla</p>
            <p
              style={{
                wordWrap: "breakWord",
                width: "292px",
                fontSize: "15px",
              }}
            >
              Amla, also known as “Indian gooseberry”, is loaded with nutrients
              and is the richest ...
            </p>
          </div>
        </div>

        <p className={styles.featuredhbs}>Skin Care</p>
        <div className={styles.istcontainer}>
          <div>
            <img
              src="https://onemg.gumlet.io/image/upload/qclivlzn55hbfukf2mjn.jpg"
              alt="Ashwagandha"
              className={styles.Ashwagandha}
            />
            <p style={{ fontSize: "14px", fontWeight: "bold" }}>Aloe vera</p>
            <p
              style={{
                wordWrap: "breakWord",
                width: "292px",
                fontSize: "15px",
              }}
            >
              Aloe vera is a cactus-like succulent plant with a clear healing
              gel in the leaves. Th...
            </p>
          </div>
          <div>
            <img
              src="https://onemg.gumlet.io/image/upload/q3lxrcgk8iok8lvx9lap.jpg"
              alt="Shilajit"
              className={styles.Ashwagandha}
            />
            <p style={{ fontSize: "14px", fontWeight: "bold" }}>Honey</p>
            <p
              style={{
                wordWrap: "breakWord",
                width: "292px",
                fontSize: "15px",
              }}
            >
              Honey is a viscous substance rich in a number of nutrients. In
              Ayurveda, it is called...
            </p>
          </div>
          <div>
            <img
              src="https://onemg.gumlet.io/image/upload/s86txjtecyd8kbcjf7dv.jpg"
              alt="Giloy"
              className={styles.Ashwagandha}
            />
            <p style={{ fontSize: "14px", fontWeight: "bold" }}>Turmeric</p>
            <p
              style={{
                wordWrap: "breakWord",
                width: "292px",
                fontSize: "15px",
              }}
            >
              Turmeric is an ancient spice which has been used mainly in
              cooking. It is also used a...
            </p>
          </div>
          <div>
            <img
              src="https://onemg.gumlet.io/image/upload/uc2vwlgcfu9x2ylp9v0w.jpg"
              alt="Amla"
              className={styles.Ashwagandha}
            />
            <p style={{ fontSize: "14px", fontWeight: "bold" }}>Coconut</p>
            <p
              style={{
                wordWrap: "breakWord",
                width: "292px",
                fontSize: "15px",
              }}
            >
              Coconut is commonly known as “Nariyal” and is considered as a good
              luck charm for new...
            </p>
          </div>
        </div>

        <p className={styles.featuredhbs}>Digestive Care</p>
        <div className={styles.istcontainer}>
          <div>
            <img
              src="https://onemg.gumlet.io/image/upload/qgyjmltpxtbcvd9yfcw0.jpg"
              alt="Ashwagandha"
              className={styles.Ashwagandha}
            />
            <p style={{ fontSize: "14px", fontWeight: "bold" }}>Alsi</p>
            <p
              style={{
                wordWrap: "breakWord",
                width: "292px",
                fontSize: "15px",
              }}
            >
              Alsi or Flax seeds are important oil seeds which are used for
              various medicinal benef...
            </p>
          </div>
          <div>
            <img
              src="https://onemg.gumlet.io/image/upload/kfvmisbzvvsfrwdrnfkx.jpg"
              alt="Shilajit"
              className={styles.Ashwagandha}
            />
            <p style={{ fontSize: "14px", fontWeight: "bold" }}>Ginger</p>
            <p
              style={{
                wordWrap: "breakWord",
                width: "292px",
                fontSize: "15px",
              }}
            >
              Ginger is used as a spice,flavoring agent as well as herbal remedy
              in almost every I...
            </p>
          </div>
          <div>
            <img
              src="https://onemg.gumlet.io/image/upload/aajb2xlk0rrf1ihnfssk.jpg"
              alt="Giloy"
              className={styles.Ashwagandha}
            />
            <p style={{ fontSize: "14px", fontWeight: "bold" }}>Dhania</p>
            <p
              style={{
                wordWrap: "breakWord",
                width: "292px",
                fontSize: "15px",
              }}
            >
              Dhania or Coriander is an evergreen herb with characteristic
              aroma.Dried
            </p>
          </div>
          <div>
            <img
              src="https://onemg.gumlet.io/image/upload/tx3eulyzgfldbt7igzke.jpg"
              alt="Amla"
              className={styles.Ashwagandha}
            />
            <p style={{ fontSize: "14px", fontWeight: "bold" }}>Fennel Seeds</p>
            <p
              style={{
                wordWrap: "breakWord",
                width: "292px",
                fontSize: "15px",
              }}
            >
              Fennel seeds are popularly known as Saunf in Hindi. It is an
              ancient Indian spice wit...
            </p>
          </div>
        </div>

        <p className={styles.featuredhbs}>Hair Care</p>
        <div className={styles.istcontainer}>
          <div>
            <img
              src="https://onemg.gumlet.io/image/upload/ezfdfqum4v4j5eve0sqo.jpg"
              alt="Ashwagandha"
              className={styles.Ashwagandha}
            />
            <p style={{ fontSize: "14px", fontWeight: "bold" }}>Onion</p>
            <p
              style={{
                wordWrap: "breakWord",
                width: "292px",
                fontSize: "15px",
              }}
            >
              Onion or Pyaaz has a strong pungent smell and is used in various
              forms to impart flav...
            </p>
          </div>
          <div>
            <img
              src="https://onemg.gumlet.io/image/upload/oxbavfj3ka8nzu3kijq0.jpg"
              alt="Shilajit"
              className={styles.Ashwagandha}
            />
            <p style={{ fontSize: "14px", fontWeight: "bold" }}>Bhringraj</p>
            <p
              style={{
                wordWrap: "breakWord",
                width: "292px",
                fontSize: "15px",
              }}
            >
              Bhringraj is also known as Kesharaj which means "Ruler of the
              hair".It is rich in pr...
            </p>
          </div>
          <div>
            <img
              src="https://onemg.gumlet.io/image/upload/irazjokdgsiiuw6abiph.jpg"
              alt="Giloy"
              className={styles.Ashwagandha}
            />
            <p style={{ fontSize: "14px", fontWeight: "bold" }}>Amla</p>
            <p
              style={{
                wordWrap: "breakWord",
                width: "292px",
                fontSize: "15px",
              }}
            >
              Amla, also known as "Indian Gooseberry",is loaded with nutrients
              and is the richest...
            </p>
          </div>
          <div>
            <img
              src="https://onemg.gumlet.io/images/jjuvxnubrxztnibqkp8w/shikakai-0.jpg"
              alt="Amla"
              className={styles.Ashwagandha}
            />
            <p style={{ fontSize: "14px", fontWeight: "bold" }}>Shikakai</p>
            <p
              style={{
                wordWrap: "breakWord",
                width: "292px",
                fontSize: "15px",
              }}
            >
              Shikakai which means "fruit for hair" is a part of the traditional
              Indian Ayurvedic m...
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ayurveda;
