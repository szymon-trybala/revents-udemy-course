import React from 'react';
import  format from 'date-fns/format';
import { Grid, Segment, Header, List, Item, Icon } from 'semantic-ui-react';

const UserDetailedDescription = ({ profile }) => {
  let createdAt;
  if (profile.createdAt) {
    createdAt = format(profile.createdAt.toDate(), 'd MMMM yyyy');
  }
  return (
    <Grid.Column width={12}>
      <Segment>
        <Grid columns={2}>
          <Grid.Column width={10}>
            <Header icon='smile' content='About display name' />
            <p>
              I am a: <strong>{profile.occupation || 'tbn'}</strong>
            </p>
            <p>
              Originally from: <strong>{profile.origin || 'tbn'}</strong>
            </p>
            <p>
              Member since: <strong>{createdAt}</strong>
            </p>
            <p>{profile.description}</p>
          </Grid.Column>
          <Grid.Column width={6}>
            <Header icon='heart outline' content='Interests' />
            {profile.interests ? (
              <List>
                {profile.interests &&
                  profile.interests.map((interest, index) => (
                    <Item key={index}>
                      <Icon name='heart' />
                      <Item.Content>{interest}</Item.Content>
                    </Item>
                  ))}
              </List>
            ) : (
              <p>No interests :c</p>
            )}
          </Grid.Column>
        </Grid>
      </Segment>
    </Grid.Column>
  );
};

export default UserDetailedDescription;
