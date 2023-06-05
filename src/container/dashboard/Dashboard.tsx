import React, {useState, useCallback, useMemo, useEffect} from 'react';
import {
  View,
  TextInput,
  FlatList,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import {styles} from './dashboardStyles';
import {COVER_URL, SEARCH_URL} from '../../constants/Constants';
import Card from '../../components/card/Card';
import {ProgressBar} from '../../components/progressBar/ProgressBar';
import {ItemDocsProps} from '../../types/globalTypes';
import ItemDetailsModal from '../../components/modal/ItemDetailsModal';
import ItemDetails from '../itemDetails/ItemDetails';
import {
  BY,
  ID_PARAM,
  LIMIT_PARAM,
  NO_DATA_FOUND,
  PAGE_PARAM,
  QUERY_PARAM,
  SEARCH_BY,
  WELCOME,
} from '../../assets/strings/Strings';

const Dashboard: React.FC = () => {
  const [data, setData] = useState<Array<ItemDocsProps>>([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedItem, setSelectedItem] = useState<ItemDocsProps>();
  const [displayText, setDisplayText] = useState(WELCOME);

  const PAGE_LIMIT = '20';

  const fetchData = useCallback(
    async (page: number) => {
      setLoading(true);
      const url = SEARCH_URL.replace(QUERY_PARAM, query)
        .replace(PAGE_PARAM, page.toString())
        .replace(LIMIT_PARAM, PAGE_LIMIT);
      const response = await fetch(url);
      const responseData = await response.json();
      setData(prevData => [...prevData, ...responseData.docs]);
      setLoading(false);
      setDisplayText(data?.length ? '' : NO_DATA_FOUND);
    },
    [data?.length, query],
  );

  useEffect(
    () => setDisplayText(query?.length ? '' : WELCOME),
    [query?.length],
  );

  const fetchMoreData = async () => {
    if (loading) {
      return;
    }
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
    fetchData(nextPage);
  };

  const showBookDetails = (
    <ItemDetailsModal
      children={<ItemDetails {...selectedItem} />}
      onClose={() => setSelectedItem(undefined)}
    />
  );

  const showBookGist = (item: ItemDocsProps) => (
    <Card key={item.key}>
      <Text style={styles.bookName}>{item.title}</Text>
      <Text style={styles.authorName}>{`${BY}${item.author_name?.join(
        ', ',
      )}`}</Text>
    </Card>
  );

  const renderDataItem = ({item}: any) => (
    <TouchableOpacity
      onPress={() =>
        setSelectedItem({
          ...item,
          cover: COVER_URL.replace(ID_PARAM, item?.isbn?.[0]),
        })
      }>
      {showBookGist(item)}
    </TouchableOpacity>
  );

  const renderEmptyContainer = useMemo(
    () =>
      !loading && (
        <View style={styles.mainContainer}>
          <Text style={styles.noDataText}>{displayText}</Text>
        </View>
      ),
    [displayText, loading],
  );

  return (
    <ProgressBar loading={loading}>
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <TextInput
          style={styles.searchInput}
          onChangeText={text => {
            setData([]);
            setQuery(text);
            setCurrentPage(1);
          }}
          onSubmitEditing={() => {
            if (query.length) {
              fetchData(currentPage);
            } else {
              setData([]);
            }
          }}
          placeholder={SEARCH_BY}
        />
        {data?.length ? (
          <FlatList
            data={data}
            extraData={data}
            renderItem={renderDataItem}
            onEndReachedThreshold={0.2}
            onEndReached={fetchMoreData}
          />
        ) : (
          renderEmptyContainer
        )}
        {selectedItem?.cover && showBookDetails}
      </KeyboardAvoidingView>
    </ProgressBar>
  );
};

export default Dashboard;
