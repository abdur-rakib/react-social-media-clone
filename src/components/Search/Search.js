import React, { useState } from "react";
import { Input, AutoComplete } from "antd";
import { connect } from "react-redux";
import { useEffect } from "react";
import Modal from "antd/lib/modal/Modal";
import OtherUser from "../OtherUser/OtherUser";
import store from "../../redux/store";
import { CLEAR_USER } from "../../redux/types";
import { getOtherUser } from "../../redux/actions/userActions";

const Search = (props) => {
  const [options, setOptions] = useState([]);

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (props.users) {
      const opts = [];
      // setOptions(props.users.map((user) => user.handle));
      props.users.forEach((user) => {
        // console.log(user.handle);
        opts.push({ value: user.handle });
      });
      setOptions(opts);
    }
  }, [props.users]);

  const clearUser = () => {
    setVisible(false);
    store.dispatch({ type: CLEAR_USER });
  };
  const onSelect = (value) => {
    setVisible(true);
    props.getOtherUser(value);
  };

  return (
    <>
      <Modal
        style={{ top: 20 }}
        visible={visible}
        onCancel={clearUser}
        className="post__modal"
      >
        <OtherUser />
      </Modal>
      <AutoComplete
        dropdownMatchSelectWidth={252}
        style={{
          width: 300,
        }}
        defaultValue=""
        notFoundContent="Not found"
        options={options}
        filterOption={(inputValue, option) =>
          option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
        }
        onSelect={onSelect}
      >
        <Input.Search placeholder="Search users ..." enterButton />
      </AutoComplete>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    users: state.user.users,
  };
};
const mapActionsToProps = { getOtherUser };

export default connect(mapStateToProps, mapActionsToProps)(Search);
