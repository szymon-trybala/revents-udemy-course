import React from 'react';
import { Grid, Segment, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const UserDetailedSidebar = ({ isCurrentUser }) => {
  return (
    <Grid.Column width={4}>
      <Segment>
        {isCurrentUser && (
          <Button
            as={Link}
            to='/settings'
            color='teal'
            fluid
            basic
            content='Edit profile'
          />
        )}
        {!isCurrentUser && (
          <Button color='teal' fluid basic content='Follow user' />
        )}
      </Segment>
    </Grid.Column>
  );
};

export default UserDetailedSidebar;