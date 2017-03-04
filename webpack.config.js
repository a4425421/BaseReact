/**
 * Created by Hao on 2017/3/3.
 */


/**
 * �ο�http://www.jianshu.com/p/42e11515c10f
 */

module.exports = {
    devtool: 'source-map',
    entry:  __dirname + "/app/main.js",//�Ѷ���ἰ��Ψһ����ļ�
    output: {
        path: __dirname + "/public",//�������ļ���ŵĵط�
        filename: "bundle.js"//���������ļ����ļ���
    },


    module: {//�������ļ������JSON loader
        loaders: [
            {
                test: /\.json$/,
                loader: "json-loader"
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',//��webpack��module���ֵ�loaders��������ü���
                query: {
                    presets: ['es2015','react','stage-1']  // stage-1 ֧�ּ�ͷ����
                }
            }
        ]
    },



}




