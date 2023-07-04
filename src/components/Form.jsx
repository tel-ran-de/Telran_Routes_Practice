import { useForm } from 'react-hook-form'

export const Form = ({ setLogged }) => {
  const {
    register, // подписывается на инпуты/следит за ними/ работает как useState()
    handleSubmit, // проверяет данные отправление
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      surname: '',
    },
  })

  const onSubmit = (data) => {
    setLogged(true)
    console.log(data)
    //https request
  }

  const watchValue = watch('surname')

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        // defaultValue=""
        {...register('name', { required: true })}
      />
      {errors.name && <span>WHERE IS NAME</span>}

      <input
        {...register('surname', {
          required: 'Surname is required',
          minLength: { value: 4, message: 'too short' },
        })}
      />
      {errors.surname?.message}

      <input
        {...register('phone', {
          required: 'requerid',
          pattern: {
            value: /(\(?([\d \-\)\–\+\/\(]+)\)?([ .\-–\/]?)([\d]+))/,
            message: 'Invalid phone number format',
          },
        })}
        placeholder="phone number"
      />

      <input type="submit" />
    </form>
  )
}
