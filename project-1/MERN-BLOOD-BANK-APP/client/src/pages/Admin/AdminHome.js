import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Layout>
      <div className="container">
        <div className="d-flex flex-column mt-4">
          <h1>
            Welcome Admin <i className="text-success ">{user?.name}</i>
          </h1>
          <h3>Manage Blood Bank App</h3>
          <hr />
          <p>
            sed egestas egestas fringilla phasellus faucibus scelerisque
            eleifend donec pretium vulputate sapien nec sagittis aliquam
            malesuada bibendum arcu vitae elementum curabitur vitae nunc sed
            velit dignissim sodales ut eu sem integer vitae justo eget magna
            fermentum iaculis eu non diam phasellus vestibulum lorem sed risus
            ultricies tristique nulla aliquet enim tortor at auctor urna nunc id
            cursus metus aliquam eleifend mi in nulla posuere sollicitudin
            aliquam ultrices sagittis orci a scelerisque purus semper eget duis
            at tellus at urna condimentum mattis pellentesque id nibh tortor id
            aliquet lectus proin nibh nisl condimentum id venenatis a
            condimentum vitae sapien pellentesque habitant morbi tristique
            senectus et netus et malesuada fames ac turpis egestas sed tempus
            urna et pharetra pharetra massa massa ultricies mi quis hendrerit
            dolor magna eget est lorem ipsum dolor sit amet consectetur
            adipiscing elit pellentesque habitant morbi tristique senectus et
            netus et malesuada fames ac turpis egestas integer eget aliquet nibh
            praesent tristique magna sit amet purus gravida quis blandit turpis
            cursus in hac habitasse platea dictumst quisque sagittis purus sit
            amet volutpat consequat mauris nunc congue nisi vitae suscipit
            tellus mauris a diam maecenas sed enim ut sem viverra aliquet eget
            sit amet tellus cras adipiscing enim eu
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;
