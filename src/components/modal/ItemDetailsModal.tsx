import React from 'react';
import {View, Modal, Image, TouchableOpacity} from 'react-native';
import {styles} from './itemDetailsModalStyles';

type Props = {
  children: React.ReactNode;
  style?: {};
  onClose: () => void;
};

const ItemDetailsModal: React.FC<Props> = ({children, onClose}) => {
  const renderCloseIcon = (
    <TouchableOpacity style={styles.closeContainer} onPress={onClose}>
      <Image
        style={styles.closeImage}
        source={{
          uri: 'https://img.icons8.com/ios-glyphs/72/macos-close.png',
        }}
      />
    </TouchableOpacity>
  );

  return (
    <Modal transparent animationType="fade" statusBarTranslucent={true}>
      <>
        <View style={styles.container}>
          <View style={styles.modalOverlay} />
          <View style={styles.modal}>
            <>{children}</>
            {renderCloseIcon}
          </View>
        </View>
      </>
    </Modal>
  );
};

export default ItemDetailsModal;
