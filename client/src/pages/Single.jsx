import React from "react";
import { Link } from "react-router-dom";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import Menu from "../components/Menu";
const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://images.pexels.com/photos/19151872/pexels-photo-19151872/free-photo-of-white-sand-dunes-in-the-desert.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <div className="user">
          <img
            src="https://images.pexels.com/photos/3760376/pexels-photo-3760376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <div className="info">
            <span>Hakam Qalalwi</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam,
          quidem?
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, quam
          hic. Iste tenetur sint sed recusandae repudiandae hic mollitia rem.
          Quisquam ullam quia, ex provident aut commodi facere quo dicta
          praesentium rerum doloribus dolores a quis nobis aliquam deleniti
          ipsum in totam blanditiis possimus? Magnam iste voluptas quae est, nam
          labore mollitia doloribus optio aliquam sequi enim, nulla sint
          voluptatem incidunt quidem modi. Magni ipsam consequuntur ex dolorem
          iusto sunt deserunt quam illo nisi cumque impedit praesentium, iure
          veritatis. Ducimus consequatur vitae libero incidunt, eos deserunt
          fugit minus repellat ex saepe voluptas doloremque vel commodi sequi
          aliquam molestias reprehenderit numquam impedit distinctio a
          <br />
          <p>
            aspernatur? Impedit voluptatum optio aut enim, veritatis, eaque
            assumenda tenetur amet vitae adipisci accusantium quam! Quae
            pariatur ratione minus quia eius accusantium ipsum eos aut optio
            quisquam, iure, commodi asperiores. Ratione soluta delectus iure
            porro, magnam repellendus neque explicabo! Eveniet, quae. Ipsa
            cupiditate doloribus nesciunt iusto cumque aliquam qui officiis
            nihil tempore hic sequi reiciendis sint laboriosam numquam
            architecto esse neque unde labore repellat ex veniam earum, quisquam
            deleniti? Amet, excepturi iste! In voluptates labore tempora
            incidunt, optio, illum explicabo quisquam iste illo maxime et
            asperiores, quod accusantium id ullam deserunt! Ea asperiores
            consequuntur ad nostrum sit consectetur nulla impedit cupiditate,
            totam magni quam eligendi soluta odit quibusdam
            <br />
            <br />
          </p>
          perspiciatis distinctio dolorem ducimus iste doloremque facilis
          laborum qui. Officiis quaerat cupiditate quia iste minus tenetur
          neque, provident optio labore ullam ipsam accusantium ipsa quis
          aperiam soluta fuga. Dignissimos fuga culpa fugit. Deleniti cum
          inventore harum rem, hic ducimus amet alias dolorum accusantium iusto,
          eius maiores ab officiis iure excepturi eos! Magni est, aliquam
          necessitatibus corporis praesentium harum at numquam vero autem? Harum
          voluptatum repellendus quibusdam tenetur illum adipisci maxime sequi
          molestiae iure vel voluptates quos odio ut doloremque et commodi
          deleniti, rerum corporis aut consectetur? Sapiente, exercitationem
          cupiditate?
        </p>
        <br />
        <br />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus
          laudantium vitae molestiae facere saepe ex odio autem dolore ipsum,
          non possimus aut, sit iusto magnam tempora libero eos illum aliquam
          ratione id praesentium recusandae quidem mollitia quisquam. Amet
          libero, cupiditate impedit soluta quisquam, repellat, odio totam
          necessitatibus rerum pariatur nulla. Voluptate est porro sapiente
          repellendus, natus quia non consequatur ex, minus, illo veritatis aut!
          Corrupti adipisci hic fugit sequi obcaecati, nemo quo aliquid numquam
          amet omnis. Consectetur, sed fuga quisquam et ipsum culpa nisi hic
          voluptas repudiandae explicabo modi magnam praesentium eaque deserunt,
          ullam sequi eos quo optio sunt aliquam earum reprehenderit soluta
          quibusdam quae. Doloremque laboriosam ab obcaecati perspiciatis, in
          quibusdam sint aut unde adipisci minus at debitis vitae architecto
          voluptas placeat autem maiores deserunt modi consequatur quis eos
          similique. Excepturi temporibus illo minus fugiat deserunt iure
          consequatur magni dolorem fugit quod tenetur enim soluta tempore rem
          consequuntur, ab quam iusto, eaque, a voluptatum inventore? Quibusdam
          dolores cupiditate doloribus voluptatem. Nostrum quibusdam cupiditate
          fuga velit atque minima amet assumenda cum soluta molestiae
          praesentium rerum necessitatibus explicabo nemo incidunt quaerat in
          optio aut, vero culpa animi. Est aliquid ea consequatur vel a
          corporis, tenetur vitae odio. Quae eveniet autem amet!
        </p>
      </div>
      <Menu />
    </div>
  );
};

export default Single;
