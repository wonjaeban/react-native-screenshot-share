import React, {useRef} from 'react';
import ViewShot from 'react-native-view-shot';

const useViewShot = () => {
  const ref = useRef<ViewShot>(null);

  const captureScreen = async () => {
    if (ref.current) {
      try {
        const uri = await ref.current.capture?.();
        return uri;
      } catch (error) {
        console.error('Capture error:', error);
      }
    }
  };
  return {ref, captureScreen};
};

export default useViewShot;
