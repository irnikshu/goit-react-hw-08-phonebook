import styles from './login-form.module.scss';
import useForm from '../../shared/hooks/useForm';
import initialState from './initialState';
import TextField from '../../shared/components/TextField/TextField';
import fields from './fields';
import Button from '../../shared/components/Button/button';


const RegisterForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });
  const { email, password } = state;

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <TextField value={email} handleChange={handleChange} {...fields.email} />
      <TextField
        value={password}
        handleChange={handleChange}
        {...fields.password}
      />
      <Button type="submit">Login</Button>
    </form>
  );
};

export default RegisterForm;
