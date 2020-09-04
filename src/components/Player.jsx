import React, {useEffect} from 'react';
import '../assets/styles/components/Player.scss';
import { connect } from 'react-redux';
import { getVideoSourse } from '../actions/index';
import { Redirect } from 'react-router-dom';

const Player = (props) => {
  const { id } = props.match.params;
  const hasPlaying = Object.keys(props.playing).length > 0;

  useEffect(() => {
    props.getVideoSourse(id);
  }, []);

  return hasPlaying ? (
    <div className='Player'>
      <video controls autoPlay>
        <source src={ props.playing.source } type='video/mp4' />
      </video>
      <div className='Player-back'>
        <button type='button' onClick={() => props.history.goBack()}>
          Regresar
        </button>
      </div>
    </div>
  ) : (
    setTimeout(<Redirect to="/404/" />, 1000)
  );

};

const mapStateToProps = (state) => {
  return {
    playing: state.playing,
  };
};

const mapDispatchToProps = {
  getVideoSourse,
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
