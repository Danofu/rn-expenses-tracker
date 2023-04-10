import PropTypes from 'prop-types';

export const tabIconPropTypes = { color: PropTypes.string.isRequired, size: PropTypes.number.isRequired };
export const tabIconDefaultProps = {};

export const flatListRenderItemPropTypes = { index: PropTypes.number.isRequired, item: PropTypes.any.isRequired };
export const flatListRenderItemDefaultProps = {};

export const bottomTabsHeaderRightPropTypes = { tintColor: PropTypes.string };
export const bottomTabsHeaderRightDefaultProps = { tintColor: undefined };

export const screenPropTypes = {
  navigation: PropTypes.shape({ setOptions: PropTypes.func.isRequired }).isRequired,
  route: PropTypes.shape({ params: PropTypes.object }).isRequired,
};
export const screenDefaultProps = {};
