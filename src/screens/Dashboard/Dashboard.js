import React from "react";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import firebase from "../../firebase";
import "./DashboardStyle.css";

function Dashboard() {
  const [data, setData] = useState([]);
  const firebaseRef = firebase.firestore().collection("schools");

  useEffect(() => {
    // getDataSnapshot();
    getData();
    // addNewData({
    //   id: uuidv4(),
    //   name: "new name",
    //   desc: new Date() + "krekgneknk kejejgl",
    // });
  }, []);

  const getDataSnapshot = () => {
    firebaseRef.onSnapshot((snapshot) => {
      const data = [];
      snapshot.forEach((item) => {
        data.push(item.data());
      });
      setData(data);
    });
  };

  const getData = () => {
    firebaseRef.get().then((item) => {
      const items = item.docs.map((item) => item.data());
      setData(items);
    });
  };

  const addNewData = (newData) => {
    firebaseRef
      .doc(newData.id)
      .set(newData)
      .then(() => console.log("added"))
      .catch((err) => console.log(err));
  };

  const deleteItem = (id) => {
    firebaseRef
      .doc(id)
      .delete()
      .then(() => {
        console.log("deleted");
        getData();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      {data.map((item) => {
        return (
          <div className="details__container" key={item.id}>
            <div className="name"> {item.name} </div>
            <div className="desc"> {item.desc} </div>
            <button className="delete" onClick={() => deleteItem(item.id)}>
              delete
            </button>
          </div>
        );
      })}
    </div>
  );
}

const mapStateToProps = ({}) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
