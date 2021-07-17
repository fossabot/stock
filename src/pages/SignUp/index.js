import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import api from "../../services/api";
import { Form, Container } from "./styles";
import Title from "../../components/title";

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
          error: "Ocorreu um problema com o cadastro ou usuário já cadastrado",
        });
      }
    }
  };
  render() {
    return (
      <Container>
        <Form onSubmit={this.handleRegister}>
          <Title title="Registro" />
          {this.state.error && <p>{this.state.error}</p>}
          <input
            type="text"
            placeholder="Primeiro nome"
            value={this.state.firstname}
            onChange={(e) => this.setState({ firstname: e.target.value })}
          />
          <input
            type="text"
            placeholder="Último nome"
            value={this.state.lastname}
            onChange={(e) => this.setState({ lastname: e.target.value })}
          />
          <input
            type="text"
            placeholder="Nome de usuário"
            value={this.state.username}
            onChange={(e) => this.setState({ username: e.target.value })}
          />
          <input
            type="password"
            placeholder="Senha"
            value={this.state.password}
            onChange={(e) => this.setState({ password: e.target.value })}
          />
          <button type="submit">Entrar</button>
          <hr />
          <Link to="/">Retornar para a tela de login</Link>
        </Form>
      </Container>
    );
  }
}

export default withRouter(SignUp);
