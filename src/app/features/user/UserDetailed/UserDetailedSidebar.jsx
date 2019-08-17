import React from "react";
import { Grid, Segment, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const UserDetailedSidebar = ({
  isCurrentUser,
  profile,
  followUser,
  isFollowing,
  unfollowUser
}) => {
  return (
    <Grid.Column width={4}>
      <Segment>
        {isCurrentUser && (
          <Button
            as={Link}
            to="/settings"
            color="teal"
            fluid
            basic
            content="Edit profile"
          />
        )}
        {!isCurrentUser && !isFollowing && (
          <Button
            onClick={() => followUser(profile)}
            color="teal"
            fluid
            basic
            content="Follow user"
          />
        )}
        {!isCurrentUser && isFollowing && (
          <Button
            color="teal"
            fluid
            basic
            content="Unfollow user"
            onClick={() => unfollowUser(profile)}
          />
        )}
      </Segment>
    </Grid.Column>
  );
};

export default UserDetailedSidebar;
