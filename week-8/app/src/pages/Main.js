import React, { useEffect, useState } from 'react'
import {
    StyleSheet,
    SafeAreaView,
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native'

import api from '../services/api'

import logo from '../assets/logo.png'
import like from '../assets/like.png'
import dislike from '../assets/dislike.png'

export default function Main({ navigation }) {
    const id = navigation.getParam('user')
    const [users, setUsers] = useState([])

    console.log(id)

    useEffect(() => {
        ;(async function loadUsers() {
            const response = await api.get('devs', {
                headers: { user: id }
            })

            setUsers(response.data)
        })()
    }, [id])

    async function handleLike(id) {
        await api.post(`devs/${id}/likes`, null, {
            headers: {
                user: id
            }
        })

        setUsers(users.filter(user => user._id !== id))
    }

    async function handleDislike(id) {
        await api.post(`devs/${id}/dislikes`, null, {
            headers: {
                user: id
            }
        })

        setUsers(users.filter(user => user._id !== id))
    }

    return (
        <SafeAreaView style={styles.container}>
            <Image source={logo} style={styles.logo} />
            <View style={styles.cardsContainer}>
                <View style={[styles.card, { zIndex: 3 }]}>
                    <Image
                        style={styles.avatar}
                        source={{
                            uri:
                                'https://scontent.faep12-1.fna.fbcdn.net/v/t1.0-9/67402832_1719273068205085_782887467643568128_o.jpg?_nc_cat=108&_nc_oc=AQnsdsj1qdoWmv3FWLnEnFyg0rUv6KbhzSu3iozOHICCLB-bDcLbxHU_UX3cBd9S371JnsX4brlR6r8TzUV-lwNV&_nc_ht=scontent.faep12-1.fna&oh=dfadcc4dce367dc43e4437e55f2d4ab9&oe=5DDAB105'
                        }}
                    />
                    <View style={styles.footer}>
                        <Text style={styles.name}>ClearNote</Text>
                        <Text style={styles.bio} numberOfLines={3}>
                            Sala vem senha vai
                        </Text>
                    </View>
                </View>
                <View style={[styles.card, { zIndex: 2 }]}>
                    <Image
                        style={styles.avatar}
                        source={{
                            uri:
                                'https://avatars3.githubusercontent.com/u/6750395?v=4'
                        }}
                    />
                    <View style={styles.footer}>
                        <Text style={styles.name}>Lucas de Andrade</Text>
                        <Text style={styles.bio} numberOfLines={3}>
                            Back-End developer. Passionate about PHP. Laravel
                            and Vue enthusiast.
                        </Text>
                    </View>
                </View>
                <View style={[styles.card, { zIndex: 1 }]}>
                    <Image
                        style={styles.avatar}
                        source={{
                            uri:
                                'https://avatars3.githubusercontent.com/u/6750395?v=4'
                        }}
                    />
                    <View style={styles.footer}>
                        <Text style={styles.name}>Lucas de Andrade</Text>
                        <Text style={styles.bio} numberOfLines={3}>
                            Back-End developer. Passionate about PHP. Laravel
                            and Vue enthusiast.
                        </Text>
                    </View>
                </View>
            </View>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.button}>
                    <Image source={dislike} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Image source={like} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    logo: {
        marginTop: 30
    },
    cardsContainer: {
        flex: 1,
        alignSelf: 'stretch',
        justifyContent: 'center',
        maxHeight: 500
    },
    card: {
        borderWidth: 1,
        borderColor: '#DDDDDD',
        borderRadius: 8,
        margin: 30,
        overflow: 'hidden',
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    },
    avatar: {
        flex: 1,
        height: 300
    },
    footer: {
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 20,
        paddingVertical: 15
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333333'
    },
    bio: {
        fontSize: 14,
        color: '#999999',
        marginTop: 2,
        lineHeight: 20
    },
    buttonsContainer: {
        flexDirection: 'row',
        marginBottom: 30
    },
    button: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
        elevation: 2,
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowRadius: 2,
        shadowOffset: {
            width: 0,
            height: 2
        }
    }
})
