
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    lessonCard: {
        transition: 'all 0.3s',

        '&:hover': {
            transform: 'scale(1.1)',
            transition: 'all 0.3s'
        },
    },
}));
