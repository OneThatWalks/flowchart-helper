import enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { ProjectState } from 'constants/types';

enzyme.configure({ adapter: new Adapter() });

export const testProject: ProjectState = {
	projectName: '',
	requirements: [],
	flows: []
};