import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class ListCategory extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listCategory: []
    };
  }

  componentDidMount() {
    const { typeService } = this.props.match.params;
    const _this = this;

    axios
      .get('/service/getListCategory', {
        params: {
          typeService
        }
      })
      .then(res => {
        const { listCategory } = res.data;

        _this.setState({
          listCategory
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const { listCategory } = this.state;
    const { typeService } = this.props.match.params;

    return (
      <div style={{ border: '3px solid red' }}>
        <h2>ListCategory</h2>
        <ul>
          {listCategory.map(({ name: nameCategory, path: pathToCategory }, i) => (
            <li key={i}>
              <Link to={`/service/${typeService}/${pathToCategory}`}>{nameCategory}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ListCategory;
