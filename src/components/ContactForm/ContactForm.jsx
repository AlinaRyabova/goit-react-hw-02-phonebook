import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import style from './contactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  contactNameId = nanoid();
  contactNumberId = nanoid();

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;

    if (name === '') {
      alert(`Введіть, будь ласка, ім'я контакту.`);
      return;
    }

    if (number === '') {
      alert(`Введіть, будь ласка, номер телефону контакту`);
      return;
    }

    this.props.onSubmit(name, number);
    this.reset();
  };
  reset() {
    this.setState({
      name: '',
      number: '',
    });
  }

  render() {
    return (
      <form className={style.form} onSubmit={this.handleSubmit}>
        <label className={style.label} htmlFor={this.contactNameId}>
          Name
          <input
            className={style.input}
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            id={this.contactNameId}
            // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            // required
          />
        </label>
        <label className={style.label} htmlFor={this.contactNumberId}>
          Number
          <input
            className={style.input}
            type="text"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
            id={this.contactNumberId}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>

        <button className={style.button} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
