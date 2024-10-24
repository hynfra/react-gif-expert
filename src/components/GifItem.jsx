import PropTypes from 'prop-types';
// de desestructuran los componentes
export const GifItem = ({title, url, id}) => {

    console.log(title, url);

  return (
    <div className="card">
        <img src={url} alt={title} />
        <p>{title}</p>
    </div>
  )

 

}

GifItem.propTypes = {
    title:PropTypes.string.isRequired,
    url:PropTypes.string.isRequired
}
