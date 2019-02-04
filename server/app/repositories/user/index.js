const {
	UserModel
} = absoluteRequire('models/user');

const {
	encryptPassword
} = absoluteRequire('modules/utils');

exports.addUser = (model) => {
	const user = new UserModel({
		nickname: model.nickname,
		password: encryptPassword(model.password),
		profileColor: model.profileColor
	});

	return user.save();
};

exports.findUser = params => UserModel.find(params);
exports.findOneUser = params => UserModel.findOne(params);