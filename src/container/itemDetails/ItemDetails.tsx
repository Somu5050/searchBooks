import React from 'react';
import {View, Text, Image} from 'react-native';
import NoImage from '../noImage/NoImage';
import {ItemDocsProps} from '../../types/globalTypes';
import {styles} from './itemDetailsStyles';
import {BY} from '../../assets/strings/Strings';

const ItemDetails: React.FC<ItemDocsProps> = ({
  title,
  author_name,
  cover,
  subject,
  contributor,
  first_publish_year,
  place,
  publisher,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <View>
          <NoImage />
          {cover ? (
            <Image
              style={styles.image}
              resizeMode="cover"
              source={{
                uri: cover,
              }}
            />
          ) : null}
        </View>
        <View style={styles.subContainer}>
          {title ? <Text style={styles.titleText}>{title}</Text> : null}
          {author_name?.length ? (
            <Text style={styles.authorText}>
              {`${BY}${author_name?.join(', ')}`}
            </Text>
          ) : null}
          {subject?.length ? (
            <Text style={styles.subjectText}>{`${subject?.join(' · ')}`}</Text>
          ) : null}
        </View>
      </View>
      <View>
        {contributor?.length ? (
          <View style={styles.rowContainer}>
            <Text style={styles.keyText}>Contributors:</Text>
            <Text style={styles.valueText}>{contributor?.join(', ')}</Text>
          </View>
        ) : null}
        {first_publish_year ? (
          <View style={styles.rowContainer}>
            <Text style={styles.keyText}>First Published On:</Text>
            <Text style={styles.valueText}>{first_publish_year}</Text>
          </View>
        ) : null}
        {place?.length ? (
          <View style={styles.rowContainer}>
            <Text style={styles.keyText}>Place:</Text>
            <Text style={styles.valueText}>{place?.join(', ')}</Text>
          </View>
        ) : null}
        {publisher?.length ? (
          <View style={styles.rowContainer}>
            <Text style={styles.keyText}>Publisher:</Text>
            <Text style={styles.valueText}>{publisher?.join(', ')}</Text>
          </View>
        ) : null}
      </View>
    </View>
  );
};
export default ItemDetails;
