import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import api from "../../services/api";
import { Form, Container } from "./styles";

class SignUp extends Component {
  state = {
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    error: "",
  };

  handleRegister = async (e) => {
    e.preventDefault();
    const { firstname, lastname, username, password } = this.state;
    if (!firstname || !lastname || !username || !password) {
      this.setState({
        error: "Insira todos os dados para se cadastrar",
      });
    } else {
      try {
        await api.post("/users/register", {
          firstname,
          lastname,
          username,
          password,
        });
        this.props.history.push("/");
      } catch (err) {
        this.setState({
          error: "Ocorreu um problema com o cadastre ou usuário já cadastrado",
        });
      }
    }
  };
  render() {
    return (
      <Container>
        <Form onSubmit={this.handleRegister}>
          {this.state.error && <p>{this.state.error}</p>}
          <input
            type="text"
            placeholder="Firstname"
            value={this.state.firstname}
            onChange={(e) => this.setState({ firstname: e.target.value })}
          />
          <input
            type="text"
            placeholder="Lastname"
            value={this.state.lastname}
            onChange={(e) => this.setState({ lastname: e.target.value })}
          />
          <input
            type="text"
            placeholder="Username"
            value={this.state.username}
            onChange={(e) => this.setState({ username: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            value={this.state.password}
            onChange={(e) => this.setState({ password: e.target.value })}
          />
          <button type="submit">Entrar</button>
          <hr />
          <Link to="/signup">Registrar</Link>
        </Form>
      </Container>
    );
  }
}

export default withRouter(SignUp);
